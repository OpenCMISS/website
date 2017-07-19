"use strict";
(function(){
	window.devversions = {};

	window.devversions.PLATFORM_NAMES = {
		"windows":"Windows",
		"mac":"OS-X",
		"linux":"Ubuntu"
	};

	function parseVersionString(versionString){
		var parsedVersion = {};
		var versionComps = versionString.split('.');
		if (versionComps.length  != 4) {
			console.log("Bad version string");
			return null;
		}

		parsedVersion.major = versionComps[0];
		parsedVersion.minor = versionComps[1];
		parsedVersion.patch = versionComps[2];
		parsedVersion.snapshot = versionComps[3];
		return parsedVersion;
	}



	function compareVersionString(a,b){
		var parsedA = parseVersionString(a.name),
			parsedB = parseVersionString(b.name);
		return parsedB.snapshot - parsedA.snapshot;
	}

	//FIXME Extract parsing into a function, and add the rest as a mixin

	window.devversions.OpenCMISSLibrariesDevVersionsList = React.createClass({
		_getNameForFormat: function(format, architecture){
			return format + " (" + architecture + ")";
		},

		_parseVersionTree: function(versionTree){
			var versionMap = {};
			for (var formatName in versionTree){
				for (var archName in versionTree[formatName]){
					for (var versionNumber in versionTree[formatName][archName]) {
						var version = versionTree[formatName][archName][versionNumber];
						var description = this._getNameForFormat(formatName, archName);
						if (versionMap[versionNumber] === undefined){
							versionMap[versionNumber] = [];
						}
						versionMap[versionNumber].push({description: description,
														url: version.url});
					}
				}
			}
			return versionMap;
		},

		buildDownloadList: function(){
			var devVersions = this.props.versions;
			var versionHash = this._parseVersionTree(devVersions);
			var versionList = [];
			for (var versionName in versionHash){
				var version = versionHash[versionName],
					versionLabel = 'Version: ' + versionName;
				versionList.push({name:versionLabel,downloads:version});
			}
			versionList.sort(compareVersionString);
			return versionList;
		},

		render: function(){
			var self = this;
			var downloads = this.buildDownloadList();
			console.log(downloads);
			// Show only the latest 5 downloads.
			return (
					<div className="versions-list">
					{downloads.slice(0,5).map(function(version){
						return (<div><p className="format-list"><DownloadBox name={version.name} downloads={version.downloads} highlightMain={false} onDownloadClicked={function(download){
							self.props.onDownloadClicked(version.name,download.description);
						}} /></p></div>)
					})}
				</div>);

		}
	});

}());
