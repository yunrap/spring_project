<%@ page contentType='text/html; charset=UTF-8'%>

<div>
    <table id="foodListTable" style="margin: auto">
        <thead>
        <th>테이블</th>
        <th>만들기</th>
        </thead>
        <tbody id="footListTable">
        </tbody>
    </table>

    <div style="text-align: center">
    <button id="childBtn">들여쓰기 -> </button>
    <button id="parentBtn">내어쓰기 <- </button>
    <button id="removeBtn">데이터삭제 </button>
    </div>

</div>
<script type="text/javascript" src="/js/TableDeps.js"/></script>
<script>
    $.ajax({
        type: "GET",
        url: "/hierarchy/json/getFoodList.json",
        dataType: "json",
        contentType : "application/json; charset=utf-8",
        error: function() {
            console.log('통신실패!!');
        },
        success: function(data) {
            const str = appendHtml(data.result);
            $("#footListTable").append(str);
        }
    });

    var appendHtml = function(resultData) {
        var str = "";
        $.each(resultData, function (i) {
            str += '<TR dataId="'+resultData[i].foodId+'" upperKey="" depth="0">'
            str += '<TD>' + resultData[i].foodName + '</TD>' +
                '<TD><INPUT  type="text" value="'+resultData[i].foodName+'" name="text"/></TD>' +
                '<TD class="hidden-col">' + resultData[i].foodId + '</TD>'
            str += '</TR>'
        });
        return str;
    }

    $("#foodListTable").on('click', 'tbody tr', function () {
        $(this).toggleClass('active');
        $(this).siblings().removeClass('active');
    })

    $(document).ready(function() {
        // 들여쓰기
        $("#childBtn").click(function(){
            const activeTr = $("#foodListTable").find(".active").closest('tr');
            const activeTd = $("#foodListTable").find(".active td:eq(0)");
            // 추가 가능확인
            if($(activeTr).prev().attr('depth') >= $(activeTr).attr('depth')){
                addSpan(activeTr, activeTd);
                getReDeps(activeTr,'child');
                addUpperKey(activeTr);
            }
        })

        // 삭제하기
        $("#removeBtn").click(function(){
            const activeTr = $("#foodListTable").find(".active").closest('tr');
            tableReArrange(activeTr);
        })

        // 내어쓰기
        $("#parentBtn").click(function() {
            const activeTr = $("#foodListTable").find(".active").closest('tr');
            const activeTd = $("#foodListTable").find(".active td:eq(0)");
            // 삭제 가능확인
            if($(activeTr).attr('depth') != 0){
                removeSpan(activeTr, activeTd);
                getReDeps(activeTr,'parent');
                addUpperKey(activeTr);
            }
        })

    })

</script>