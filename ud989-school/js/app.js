/* STUDENTS IGNORE THIS FUNCTION
 * All this does is create an initial
 * attendance record if one is not found
 * within localStorage.
 */
/*
(function() {
    if (!localStorage.attendance) {
        console.log('Creating attendance records...');
        function getRandom() {
            return (Math.random() >= 0.5);
        }

        var nameColumns = $('tbody .name-col'),
            attendance = {};

        nameColumns.each(function() {
            var name = this.innerText;
            attendance[name] = [];

            for (var i = 0; i <= 11; i++) {
                attendance[name].push(getRandom());
            }
        });

        localStorage.attendance = JSON.stringify(attendance);
    }
}());


/!* STUDENT APPLICATION *!/
$(function() {
    var attendance = JSON.parse(localStorage.attendance),
        $allMissed = $('tbody .missed-col'),
        $allCheckboxes = $('tbody input');

    // Count a student's missed days
    function countMissing() {
        $allMissed.each(function() {
            var studentRow = $(this).parent('tr'),
                dayChecks = $(studentRow).children('td').children('input'),
                numMissed = 0;

            dayChecks.each(function() {
                if (!$(this).prop('checked')) {
                    numMissed++;
                }
            });

            $(this).text(numMissed);
        });
    }

    // Check boxes, based on attendace records
    $.each(attendance, function(name, days) {
        var studentRow = $('tbody .name-col:contains("' + name + '")').parent('tr'),
            dayChecks = $(studentRow).children('.attend-col').children('input');

        dayChecks.each(function(i) {
            $(this).prop('checked', days[i]);
        });
    });

    // When a checkbox is clicked, update localStorage
    $allCheckboxes.on('click', function() {
        var studentRows = $('tbody .student'),
            newAttendance = {};

        studentRows.each(function() {
            var name = $(this).children('.name-col').text(),
                $allCheckboxes = $(this).children('td').children('input');

            newAttendance[name] = [];

            $allCheckboxes.each(function() {
                newAttendance[name].push($(this).prop('checked'));
            });
        });

        countMissing();
        localStorage.attendance = JSON.stringify(newAttendance);
    });

    countMissing();
}());
*/




$(function(){


function checkmisday(name,alldays,defaultd){

    var model = {
        name : name,
        alldays : alldays,
        default : defaultd,
        misday:0
    }


    var octopus = {
        init:function(){
            contorl.init()
        },
        getname:function(){
            return model.name;
        },
        getalldays:function(){
            return model.alldays;
        },
        getdefault:function(){
            return model.default;
        },
        setmisday:function(){
            return model.misday++;
        },
        getmisday:function(){
          return model.misday;
        }

    }

    var contorl = {
        init:function(){
            this.name = octopus.getname()
            this.days = octopus.getalldays();
            this.misday = octopus.getdefault();
          //  this.modday = octopus.getmisday();
            this.createTr();
        },
        createTr:function(){
            var datelist = '',
            misday = '',
                hjk = '';
            for(var i=0; i<this.days;i++){
                datelist +=`<td class="attend-col"><input type="checkbox"></td>`
            }
            misday = `<td class="missed-col">${this.misday}</td>`
            hjk = `<tr class="student"><td class="name-col">${name}</td>${datelist} ${misday}</tr>`;
            var  tbody = document.getElementById("tbody");
            tbody.innerHTML += hjk;
            var tttt =$(hjk).find(".attend-col");

            tttt.each(function(){
               if(!$(this).prop('checked')){
                    octopus.setmisday()
                }
            })
            this.modday = octopus.getmisday();
            var ghyji = $(".missed-col");
            ghyji.text(this.modday)

          //$(hjk).find(".missed-col").text(octopus.getmisday());

        }
    }
    octopus.init();

}

var thj = new checkmisday('chenliang',12,0);
var thj1 = new checkmisday('chenliang1',12,0);
var thj2 = new checkmisday('chenliang2',12,0);
var thj3 = new checkmisday('chenliang3',12,0);
var thj4 = new checkmisday('chenliang4',12,0);







//var ujk = new checkmisday('chenliang',12,0);


//var thj2 = new this.createTr('chenliang',octopus.setalldays(),octopus.getmday());












/*
var model = {
        misDayu:0,
        addday:0,
        day:12
}
var octopus = {
    init:function(){
        contorl.init()
    },
    setmday:function(){
        return model.misDayu++;
    },
    getmday:function(){
        return model.misDayu
    },
    setalldays:function(){
        return model.day
    }
}


var contorl = {
    init:function(){
        this.render();
    },
    render:function(){
        var thj = new this.createTr('chenliang',octopus.setalldays(),octopus.getmday());
        var thj2 = new this.createTr('chenliang',octopus.setalldays(),octopus.getmday());
    },
    createTr:function(name,days,misday){
       this.name = name;
       this.days = days;
       this.misday = misday;
       var datelist = '';
       var misday = '';
        var hjk = '';
        for(var i=0; i<this.days;i++){
            datelist +=`<td class="attend-col"><input type="checkbox"></td>`
        }
        misday = `<td class="missed-col">${this.misday}</td>`
        hjk = `<tr class="student"><td class="name-col">${name}</td>${datelist} ${misday}</tr>`;
        var  tbody = document.getElementById("tbody");
        tbody.innerHTML += hjk;
        var tttt = $(".attend-col");

        tttt.each(function(){
            if(!$(this).prop('checked')){
                octopus.setmday();
            }
        })

        console.log(octopus.getmday())


    }


}

octopus.init();*/

})