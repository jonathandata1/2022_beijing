#!/bin/sh

#  pre_build.sh
#  Pods
#
#  Created by fanhuibo on 2021/4/20.
#

temp_args=()
start=$1
index=0
for var in $@
do
    if [ $index -gt $start ] ; then
        temp_args[`expr $index - $start - 1`]=$var
    fi
    index=`expr $index + 1`
done

function tnPreEnumerateResource() {
    end_str=$1
    enumerate_fn=$2
    begin_str='install_resource${PODS_ROOT}'
    filter_str='^'$begin_str'.*'$end_str'$'
    while read -r line
    do
        new_line=$(echo $line | sed 's/[[:space:]|"]//g')
        new_line=$(echo $new_line | sed "s/[']//g")
        if [[ $(echo $new_line | grep $filter_str) ]];then
            index=${#begin_str}
            sub_str=${new_line:$index}
            $enumerate_fn $PODS_ROOT$sub_str
        fi
    done < $PODS_ROOT/Target\ Support\ Files/Pods-$TARGET_NAME/Pods-$TARGET_NAME-resources.sh
}

function tnPreGetPlistValue() {
 
    if [[ -d $1 || -f $1 ]];then
 
        /usr/libexec/PlistBuddy -c "Print :${2}" $1
 
    fi
 
}

function tnPreSetPlistValue() {
 
    if [[ -d $1 || -f $1 ]];then
 
        /usr/libexec/PlistBuddy -c "Set ${2} ${3}" $1
 
    fi
 
}

function tnPreGetProjectPlistValue() {
 
    tnPreGetPlistValue $PROJECT_DIR/$INFOPLIST_FILE $1
 
}

function tnPreSetProjectPlistValue() {
 
    tnPreSetPlistValue $PROJECT_DIR/$INFOPLIST_FILE $1 $2
 
}

function tnPreMergePlistValue() {
 
    if [[ -d $1 || -f $1 ]];then
 
        $(/usr/libexec/PlistBuddy -c "Merge ${1}" $PROJECT_DIR/$INFOPLIST_FILE)
 
    fi
 
}

function tnPrePlistToBinary() {
 
    plutil -convert binary1 $PROJECT_DIR/$INFOPLIST_FILE
 
}

echo "TNOS shell pre build start"

function tnPreBuildHandler(){
    echo "TNOS shell pre build start $1"
    source $1 ${temp_args[*]}
    echo "TNOS shell pre build end $1"
    rm $1
}

tnPreEnumerateResource '_pre_build.sh' tnPreBuildHandler
echo "TNOS shell pre build end"

