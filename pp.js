var _ = require('underscore')._;
vagas = {}
vagas['fg'] = {p:0,c:4};
vagas['ap'] = {p:0,c:4};
vagas['hp'] = {p:10,c:5};
vagas['jo'] = {p:10,c:5};
vagas['ze'] = {p:10,c:5};
vagas['df'] = {p:10,c:5};
vagas['am'] = {p:10,c:5};
included = [];
devs = Object.keys(vagas);
for(x=1;x<=10;x++){
        console.log('Dia '+x);
        included=[];
        while(included.length < devs.length) {
                pilot = escolhePiloto(devs,included);
                included.push(pilot);
                if (pilot) {
                        cop =escolheCoPiloto(devs,included);
                        included.push(cop);
                }else{
                        break;
                }
                included = _.uniq(included);
                dupla = '  ->'+pilot;
                if(cop)
                        dupla += ','+cop;
                console.log(dupla);
//              console.log(included); 
        }
//      _.each(devs,function(element, index, list){console.log(element+'-'+vagas[element].p+':'+vagas[element].c)}); 

}
function escolhePiloto(devs,included){
        nonIncluded = _.difference(devs,included);
        pilot = _.sample(nonIncluded);
        while (vagas[pilot].p <= 0 ){
                pilot = _.sample(nonIncluded);
                if (pilot == undefined) return pilot;
                nonIncluded = _.without(nonIncluded,pilot);
        }
        vagas[pilot].p--;
        return pilot;
}
function escolheCoPiloto(devs,included){
        nonIncluded = _.difference(devs,included);
        cop = _.sample(nonIncluded);
        if (cop == undefined) return cop;
        while (vagas[cop].c <= 0 ){
                cop = _.sample(nonIncluded);
                nonIncluded = _.without(nonIncluded,cop);
                if (cop == undefined) return cop;
        }
        vagas[cop].c--;
        included.push(cop);
        return cop;
}
