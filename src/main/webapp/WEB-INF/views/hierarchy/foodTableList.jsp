<%@ page contentType='text/html; charset=UTF-8'%>

<div>
    <table>
        <thead>
        <th>테이블</th>
        <th>만들기</th>
        </thead>
        <tbody id="footListTable">
        </tbody>
    </table>
</div>

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
            str += "<TR>"
            str += '<TD>' + resultData[i].foodName + '</TD>' +
                '<TD><INPUT  type="text" value="'+resultData[i].foodName+'" name="text"/></TD>' +
                '<TD class="hidden-col">' + resultData[i].foodId + '</TD>'
            str += '</TR>'
        });
        return str;
    }
</script>