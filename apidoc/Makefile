html: clean zincapi ironapi

zincapi:
# Copies the OpenCMISS-Zinc source code to a working directory then run a script that transfers Doxygen comments from C to C++ code, and then run doxygen to generate the relevant API documentation.
	mkdir -p .working/zinc
	cp -r zinc .working/
	cp LibZincDoxygen/api_2_api++_doc.py .working/zinc
	cp -r LibZincDoxygen/libzinc_doxgen_script .working/zinc
	cd .working/zinc; python api_2_api++_doc.py
	cd .working/zinc/libzinc_doxgen_script; doxygen cpp_comments.doxygen
	mkdir -p build/apidoc/zinc/latest/
	cp -r .working/zinc/libzinc_doxgen_script/libzinc_dox_output/html/* build/apidoc/zinc/latest

ironapi:
# Copies the OpenCMISS-Iron source code to a working directory, generate bindings in different programming languages then run doxygen with different configurations to generate the relevant API documentations.
	mkdir -p .working/iron
	cp -r iron .working/
	# Build and copy  Fortran and internal API documentation
	cd .working/iron/doc/doxygen/; doxygen Doxyfile_Programmer -l DoxygenLayout.xml
	cd .working/iron/doc/doxygen/; doxygen Doxyfile_Fortran -l DoxygenLayout.xml
	mkdir -p build/apidoc/iron/latest/fortran
	cp -r .working/iron/doc/doxygen/User/html/* build/apidoc/iron/latest/fortran
	mkdir -p build/apidoc/iron/latest/programmer
	cp -r .working/iron/doc/doxygen/Programmer/html/* build/apidoc/iron/latest/programmer
	# Generate Python and C++ bindings
	cd .working/iron/bindings; python generate_bindings .. C opencmiss_iron.h opencmiss_iron_c.f90
	cd .working/iron/bindings; python generate_bindings .. Python iron_python .
	# Build API documentation for Python and C bindings
	cd .working/iron/doc/doxygen; doxygen Doxyfile_Python -l DoxygenLayout.xml
	cd .working/iron/doc/doxygen; doxygen Doxyfile_C -l DoxygenLayout.xml
	mkdir -p build/apidoc/iron/latest/c
	mkdir -p build/apidoc/iron/latest/python
	cp -r .working/iron/doc/doxygen/Python/html/* build/apidoc/iron/latest/python
	cp -r .working/iron/doc/doxygen/C/html/* build/apidoc/iron/latest/c

clean:
	rm -rf .working
	rm -rf build
