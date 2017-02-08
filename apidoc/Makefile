html: clean
	cp -r zinc .working
	cp LibZincDoxygen/api_2_api++_doc.py .working
	cp -r LibZincDoxygen/libzinc_doxgen_script .working
	cd .working; python api_2_api++_doc.py
	cd .working/libzinc_doxgen_script; doxygen cpp_comments.doxygen
	mkdir -p build/documentation/apidoc/zinc/latest/
	cp -r .working/libzinc_doxgen_script/libzinc_dox_output/html/* build/documentation/apidoc/zinc/latest

clean:
	rm -rf .working
	rm -rf build
