//deps 재정리
var tableReArrange = function (tableTr) {
    var nextTr = $(tableTr).closest('tr').nextAll();
    let removeTableTr = [];

    // 현제항목 삭제
    removeTableTr.push({
        "tdId": $(tableTr).find("td.hidden-col").html(),
        "depth": $(tableTr).attr('depth')
    });
    $(tableTr).remove();

    // 하위항목만 삭제
    $(nextTr).each(function (i, e) {
        if (Number(removeTableTr[0].depth) < Number($(this).attr('depth'))) {
            //하위row 삭제
            $(this).remove();
        } else {
            return false;
        }
    });
}

// upperkey 넣기
var addUpperKey = function (activeTr) {
    var currentDepth = Number($(activeTr).attr('depth'));
    var preDepth = Number($(activeTr).prev().attr('depth'));
    var prevTrAll = $(activeTr).closest('tr').prevAll();

    alert(currentDepth + "확인..." + preDepth);


    //deps 0일때
    if(currentDepth === 0){
        $(activeTr).attr('upperkey', '');
    }
    // 같은 deps일때
    else if (currentDepth === preDepth) {
        //부모 찾기
        $(prevTrAll).each(function (i, e) {
            if (Number($(this).attr('depth')) === currentDepth-1) {
                alert($(this).attr('dataId'));
                $(activeTr).attr('upperkey', $(this).attr('dataId'));
                return false;
            }
        })
    } else if (currentDepth < preDepth) {
        // 바로위계층 포함x, 부모찾기
        $(prevTrAll).each(function (i, e) {
            if (Number($(this).attr('depth')) === currentDepth) {
                $(activeTr).attr('upperkey', $(this).prev().attr('dataId'));
                return false;
            }
        })
    }else{
        var dataId = $(activeTr).prev().attr('dataId');
        $(activeTr).attr('upperkey', dataId);
    }
}

var checkParentChild = function (type) {
    if (type === 'parent') {
        return 'PARENT'
    } else {
        return 'CHILD'
    }
}


//deps 찾기
var getReDeps = function (activeTr, type) {
    let depth = $(activeTr).attr('depth');
    $(activeTr).attr('depth', checkParentChild(type)  === 'PARENT' ? (Number(depth) - 1).toString() : (Number(depth) + 1).toString());  //insert deps
}

//span 태그넣기
var addSpan = function (activeTr, activeTd) {
    var currentDepth = Number($(activeTr).attr('depth'));
    var nextDepth = Number($(activeTr).next().attr('depth'));
    var nextTr = $(activeTr).closest('tr').nextAll();

    alert(currentDepth +"확인..."+ nextDepth);

    // 포함관계 x , deps 0
    if (currentDepth === 0) {   //todo 포함관계x 추가하기
        var val = $(activeTd).eq(0).html();
        $(activeTd).eq(0).empty();
        $(activeTd).eq(0).append('<span class="child">' + val + '</span>');
    } else {
        // 포함관계 o
        if(currentDepth === nextDepth-1) {
            // 자식포함 o
            // 1. 현재항목 추가
            var value1 = $(activeTd).children().html();
            $(activeTd).eq(0).empty();
            $(activeTd).eq(0).append('' + '&nbsp;&nbsp;&nbsp;'.repeat(currentDepth+1) + '<span class="child">' + value1 + '</span>');

            // 2. 하위항목 nbsp 하나씩추가
            $(nextTr).each(function (i, e) {
                //하위 span 태그 삭제
                if (currentDepth < Number($(this).attr('depth'))) {
                    alert(Number($(this).attr('depth')));
                    $(this).attr('depth', Number($(this).attr('depth'))+1); //addDeps
                    var value2 = $(this).find('td:eq(0)').children().html();
                    $(this).find('td:eq(0)').empty();
                    $(this).find('td:eq(0)').append('' + '&nbsp;&nbsp;&nbsp;'.repeat( Number($(this).attr('depth'))) + '<span class="child">' + value2 + '</span>');
                } else {
                    return false;
                }
            });
        }else{
            // 자식포함 x
            var value3 = $(activeTd).children().html();
            $(activeTd).eq(0).empty();
            $(activeTd).eq(0).append('' + '&nbsp;&nbsp;&nbsp;'.repeat(currentDepth+1) + '<span class="child">' + value3 + '</span>');
        }
    }
}

//span 태그삭제
//span 태그넣기
var removeSpan = function (activeTr, activeTd) {
    var currentDepth = Number($(activeTr).attr('depth'));
    var nextDepth = Number($(activeTr).next().attr('depth'));
    var nextTr = $(activeTr).closest('tr').nextAll();


     if (currentDepth === nextDepth - 1) {
        // 자식포함 o

        // 1. 현재항목 추가
        if(currentDepth === 1){
            // deps0 이되면
            var val = $(activeTd).eq(0).text();
            $(activeTd).eq(0).empty();
            $(activeTd).eq(0).html(val);
        }else{
            var value1 = $(activeTd).children().html();
            $(activeTd).eq(0).empty();
            $(activeTd).eq(0).append('' + '&nbsp;&nbsp;&nbsp;'.repeat(currentDepth - 2) + '<span class="child">' + value1 + '</span>');
        }


        // 2. 하위항목 nbsp 하나씩추가
        $(nextTr).each(function (i, e) {
            //하위 span 태그 삭제
            if (currentDepth < Number($(this).attr('depth'))) {
                alert(Number($(this).attr('depth')));
                $(this).attr('depth', Number($(this).attr('depth')) - 1); //addDeps
                var value2 = $(this).find('td:eq(0)').children().html();
                $(this).find('td:eq(0)').empty();
                $(this).find('td:eq(0)').append('' + '&nbsp;&nbsp;&nbsp;'.repeat(Number($(this).attr('depth'))-1) + '<span class="child">' + value2 + '</span>');
            } else {
                return false;
            }
        });
    } else {
        // 자식포함 x
         if(currentDepth === 1){
             // deps0 이되면
             var val = $(activeTd).eq(0).text();
             $(activeTd).eq(0).empty();
             $(activeTd).eq(0).html(val);
         }else{
             var value3 = $(activeTd).children().html();
             $(activeTd).eq(0).empty();
             $(activeTd).eq(0).append('' + '&nbsp;&nbsp;&nbsp;'.repeat(currentDepth - 2) + '<span class="child">' + value3 + '</span>');
         }
    }
}


// 테이블 getId getUpperKey
var getTableSelectIdUpperKey = function (tableTr) {
    // 오른쪽테이블없을시

    let tableId = [];
    $(tableTr).each(function (index) {
        var tdId = $(this).find("td.hidden-col").html();
        var upperKey = $(this).attr('upperKey');
        let object = {
            "tdId": tdId,
            "upperKey": upperKey
        }
        tableId.push(object);
    });
    return tableId;
}

// 테이블 getId
var getTableSelectId = function (tableTr) {
    // 오른쪽테이블없을시
    let tableId = {tableId: []};

    $(tableTr).each(function (index) {
        let tdId = $(this).find("td.hidden-col").html();
        // 공백제거
        if (tdId != undefined) {
            tableId.tableId[index] = tdId;
        }
    });
    return tableId;
}