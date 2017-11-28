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
    }
}

var contorl = {
    init:function(){
        this.render();

    },
    render:function(){
        var thj = new this.createTr('chenliang',12,0);
        var thj = new this.createTr('zhangyang',12,0);
        var thj = new this.createTr('dongshiqing',12,0);
        var thj = new this.createTr('liuhuan',12,0);
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



    }
}








octopus.init();