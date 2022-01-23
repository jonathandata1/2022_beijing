#!/bin/sh

#  after_build.sh
#  Pods
#
#  Created by fanhuibo on 2021/4/20.
#  

app_dir=$BUILT_PRODUCTS_DIR/$FULL_PRODUCT_NAME
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


function tnAfterEnumerateResource() {
    for file in $(find -L $BUILT_PRODUCTS_DIR/$FULL_PRODUCT_NAME -type f | grep $1)
    do
        echo "TNOS shell after build start $file"
        $2 $file
        echo "TNOS shell after build end $file"
    done
}

function tnAfterGetPlistValue() {
 
    if [[ -d $1 || -f $1 ]];then
 
        /usr/libexec/PlistBuddy -c "Print :${2}" $1
 
    fi
 
}

function tnAfterSetPlistValue() {
 
    if [[ -d $1 || -f $1 ]];then
 
        /usr/libexec/PlistBuddy -c "Set ${2} ${3}" $1
 
    fi
 
}

function tnAfterGetProjectPlistValue() {
 
    tnAfterGetPlistValue $BUILT_PRODUCTS_DIR/$INFOPLIST_PATH $1
 
}

function tnAfterSetProjectPlistValue() {
 
    tnAfterSetPlistValue $BUILT_PRODUCTS_DIR/$INFOPLIST_PATH $1 $2
 
}

function tnAfterMergePlistValue() {
 
    if [[ -d $1 || -f $1 ]];then
 
        $(/usr/libexec/PlistBuddy -c "Merge ${1}" $BUILT_PRODUCTS_DIR/$INFOPLIST_PATH)
 
    fi
 
}

function tnAfterPlistToBinary() {
 
    plutil -convert binary1 $BUILT_PRODUCTS_DIR/$INFOPLIST_PATH
 
}

endStr='_after_build.sh'
echo "TNOS shell after build start"

function tnAfterBuildHandler(){
    echo "TNOS shell after build start $file"
    source $1 ${temp_args[*]}
    echo "TNOS shell after build end $file"
    rm $1
}

tnAfterEnumerateResource '_after_build.sh' tnAfterBuildHandler

tnAfterEnumerateResource '_after_build_completed.sh' tnAfterBuildHandler

echo "TNOS shell after build end"
