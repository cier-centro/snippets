#Setting name
name=""
echo -n "Enter the directive name: "
read name;
dashName="$(echo $name | sed -r 's/([a-z0-9])([A-Z])/\1-\L\2/g')" 
echo "creating directive called $name ($dashName)"

# create files
cp -r src/fooBarDirective src/"$name"Directive/
for f in src/"$name"Directive/fooBar*;do  mv "$f" "${f/'fooBar'/$name}"; done
sed -i -- "s/fooBar/$name/g" src/"$name"Directive/*
sed -i -- "s/foo-bar/$dashName/g" src/"$name"Directive/*

