 #!/usr/bin/env bash

usage() {
cat << EOF
Usage: printargs.sh [OPTIONS] [ARGUMENTS]
  Print the number of arguments.

OPTIONS:
  -h      print help message
  -m MSG  custom message
  -v MSG  custom message [verbose mode]

Examples:
  printargs.sh a b c
  printargs.sh -m 'Arguments count: ' a b c
  printargs.sh -v a b c
  printargs.sh -h

EOF
}

while getopts “hmv:” OPTION
do
    case $OPTION in
        h)
            usage
            exit 1
            shift;;
        m)
            MESSAGE=$OPTARG
            shift;shift;;
        v)
            VERBOSE=true
            shift;;
    esac
done

COUNT=0

for ARG in $@; do
  if [[ $VERBOSE ]]; then
    echo $ARG
  fi

  let COUNT+=1
done

if [[ "$MESSAGE" != "" ]]; then
    echo $MESSAGE
fi

echo $COUNT