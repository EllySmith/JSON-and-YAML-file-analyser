### Hexlet tests and linter status:
[![Actions Status](https://github.com/EllySmith/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/EllySmith/frontend-project-46/actions)
<a href="https://codeclimate.com/github/EllySmith/frontend-project-46/test_coverage"><img src="https://api.codeclimate.com/v1/badges/8e40df533f43dab227bc/test_coverage" /></a>
<a href="https://codeclimate.com/github/EllySmith/frontend-project-46/test_coverage"><img src="https://api.codeclimate.com/v1/badges/8e40df533f43dab227bc/test_coverage" /></a>
[![Linter](https://github.com/EllySmith/frontend-project-46/actions/workflows/lint.yml/badge.svg)](https://github.com/EllySmith/frontend-project-46/actions/workflows/lint.yml) 

DESCRIPTION

Compares two javascript object files and shows the differences between them in three different formats. Supports two formats: json and yaml. 

INSTALLATION

git clone git@github.com:EllySmith/frontend-project-46.git
cd frontend-project-46
make install
sudo npm link

COMMANDS 

gendiff <file1> <file2> 

Runs the programm with the default 'stylish' formatter showing '+' infront of added items and '-' infront of deleted items. 

gendiff <file1> <file2> --format plain

Runs the programm with 'plain' formatter showing the differens in textual format.

gendiff <file1> <file2> --format json

Runs the programm with with 'json' formatter whosing a json file. 