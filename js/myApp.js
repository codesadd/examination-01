//Define an angular module for our app, 'ngResource'
var app = angular.module('myApp', ['ui.bootstrap']);

app.controller('AppController', function($scope, $http, $window) {
    getTeacher(); // Load all available tasks 
    getFieldService();
    getField6();
    getField9();
    getBranch();

    $scope.checkId = function(open_id, sub_id) {
        $http.post("php/checkId.php?sub_id=" + sub_id + "&open_id=" + open_id).success(function(data) {
            $scope.checkId = data;
        });
    };
    $scope.addData = function(subID,subName,subCredit,subYear,subNSec,subBranch,subType,subDivision,teachCode,teachName,teachSname) {
        $http.post("php/insertData.php?sub_id=" + subID + "&sub_name=" + subName + "&sub_credit=" + subCredit + "&sub_year=" + subYear + "&sub_nsec=" + subNSec + "&sub_branch=" + subBranch + "&sub_type" + subType + "&sub_div" + subDivision + "&teach_code=" + teachCode + "&teach_name=" + teachName + "&teach_sname=" + teachSname).success(function(data) {
            getFieldService();
            getField6();
            getField9();
            getBranch();
        })
    };

    function getBranch() { // ดึงข้อมูลอาจารย์คุมสอบ
        $http.post("php/getBranch.php").success(function(data) {
            $scope.branch = data;
        });
    };

    function getTeacher() { // ดึงข้อมูลอาจารย์คุมสอบ
        $http.post("php/getTeacher.php").success(function(data) {
            $scope.teachers = data;
        });
    };

    function getRoom() { // ดึงข้อมูลอาจารย์คุมสอบ
        $http.post("php/getRoom.php").success(function(data) {
            $scope.room = data;
        });
    };

    function getField6() { // Select วิชา 6 หลัก
        $http.post("php/getField1.php").success(function(data) {
            $scope.sub6 = data;
        });
    };

    function getField9() { // Select วิชา 9 หลัก
        $http.post("php/getField2.php").success(function(data) {
            $scope.sub9 = data;
        });
    };

    function getFieldService() { // Select วิชา 9 หลัก
        $http.post("php/getField3.php").success(function(data) {
            $scope.subService = data;
        });
    };
    $scope.addNumStd = function(num, id, open_id, division) { // เพิ่มข้อมูลจำนวนนักศสึกที่สอบแต่ละวิชา
        $http.post("php/updateNumStd.php?sub_id=" + id + "&numStd=" + num + "&division=" + division + "&open_id=" + open_id).success(function(data) {
            getFieldService();
            getField6();
            getField9();
        });
    };

    $scope.Days = [{
        name: 'วันที่',
        value: ' '
    }, {
        name: '1',
        value: '1'
    }, {
        name: '2',
        value: '2'
    }, {
        name: '3',
        value: '3'
    }, {
        name: '4',
        value: '4'
    }, {
        name: '5',
        value: '5'
    }, {
        name: '6',
        value: '6'
    }, {
        name: '7',
        value: '7'
    }, {
        name: '8',
        value: '8'
    }, {
        name: '9',
        value: '9'
    }, {
        name: '10',
        value: '10'
    }, {
        name: '11',
        value: '11'
    }, {
        name: '12',
        value: '12'
    }, {
        name: '13',
        value: '13'
    }, {
        name: '14',
        value: '14'
    }, {
        name: '15',
        value: '15'
    }, {
        name: '16',
        value: '16'
    }, {
        name: '17',
        value: '17'
    }, {
        name: '18',
        value: '18'
    }, {
        name: '19',
        value: '19'
    }, {
        name: '20',
        value: '20'
    }, {
        name: '21',
        value: '21'
    }, {
        name: '22',
        value: '22'
    }, {
        name: '23',
        value: '23'
    }, {
        name: '24',
        value: '24'
    }, {
        name: '25',
        value: '25'
    }, {
        name: '26',
        value: '26'
    }, {
        name: '27',
        value: '27'
    }, {
        name: '28',
        value: '28'
    }, {
        name: '29',
        value: '29'
    }, {
        name: '30',
        value: '30'
    }, {
        name: '31',
        value: '31'
    }];

    $scope.Months = [{
        name: 'เดือน',
        value: ' '
    }, {
        name: 'มกราคม',
        value: '01'
    }, {
        name: 'กุมภาพันธ์',
        value: '02'
    }, {
        name: 'มีนาคม',
        value: '03'
    }, {
        name: 'เมษายน',
        value: '04'
    }, {
        name: 'พฤษภาคม',
        value: '05'
    }, {
        name: 'มิถุนายน',
        value: '06'
    }, {
        name: 'กรกฎาคม',
        value: '07'
    }, {
        name: 'สิงหาคม',
        value: '08'
    }, {
        name: 'กันยายน',
        value: '09'
    }, {
        name: 'ตุลาคม',
        value: '10'
    }, {
        name: 'พฤศจิกายน',
        value: '11'
    }, {
        name: 'ธันวาคม',
        value: '12'
    }];

    $scope.Years = [{
        name: 'ปี',
        value: ' '
    }, {
        name: '2558',
        value: '2015'
    }, {
        name: '2559',
        value: '2016'
    }, {
        name: '2560',
        value: '2017'
    }, {
        name: '2561',
        value: '2018'
    }, {
        name: '2562',
        value: '2019'
    }, {
        name: '2563',
        value: '2020'
    }];
    $scope.mDay = $scope.Days[0];
    $scope.mMonth = $scope.Months[0];
    $scope.mYear = $scope.Years[0];
    $scope.lDay = $scope.Days[0];
    $scope.lMonth = $scope.Months[0];
    $scope.lYear = $scope.Years[0];



});
