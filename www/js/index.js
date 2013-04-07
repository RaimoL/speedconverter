/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    initialize: function() {
        this.bind();
    },
    bind: function() {
        document.addEventListener('deviceready', this.deviceready, false);
    },
    deviceready: function() {
        // This is an event handler function, which means the scope is the event.
        // So, we must explicitly called `app.report()` instead of `this.report()`.
        app.report('deviceready');
    },
    report: function(id) {
        // Report the event in the console
        console.log("Report: " + id);

        // Toggle the state from "pending" to "complete" for the reported ID.
        // Accomplished by adding .hide to the pending element and removing
        // .hide from the complete element.
        document.querySelector('#' + id + ' .pending').className += ' hide';
        var completeElem = document.querySelector('#' + id + ' .complete');
        completeElem.className = completeElem.className.split('hide').join('');
    }
};
function countspeed() {
	countdestime();
	var speedms=parseFloat(document.getElementById("lega").value/document.getElementById("starttah").value);
	document.getElementById("speeda").value=speedms.toFixed(1);
	document.getElementById("starttah").value=Math.floor(document.getElementById("starttah").value);
	speedms=speedms/3.6;
	var speedmm=parseFloat(60*speedms);
	var speedmkm=parseFloat(1000.0/speedmm);
	var speedmkmm=Math.floor(speedmkm);
	var speedmkms=parseFloat(60*(parseFloat(speedmkm)-parseFloat(speedmkmm))+0.00001);
	if (speedmkms>=60)
		{
		speedmkms=0;
		speedmkmm=speedmkmm+1;
		}
	document.getElementById("speedm").value=speedms.toFixed(1)+" m/s, "+speedmm.toFixed(0)+" m/min, "+speedmkmm.toFixed(0)+":"+speedmkms.toFixed(0)+" min/km";
};

function counttime() {
       	document.getElementById("starttah").value=parseFloat(document.getElementById("lega").value/document.getElementById("speeda").value);
	countinttime();
	document.getElementById("speedm").value="  ";
};
function countleg() {
 	countdestime();
       	document.getElementById("lega").value=Math.round(10*document.getElementById("starttah").value*document.getElementById("speeda").value)/10;
	document.getElementById("starttah").value=Math.floor(document.getElementById("starttah").value);
	document.getElementById("speedm").value="  ";
};
function countdestime() {
       	document.getElementById("starttah").value=parseFloat(document.getElementById("starttah").value)+parseFloat(document.getElementById("starttam").value/60)+parseFloat(document.getElementById("starttas").value/3600);
};
function countinttime() {
       	var hhh=parceFloat(document.getElementById("starttah").value);
 	var mmmm=parseFloat(60*(parseFloat(document.getElementById("starttah").value)-Math.floor(hhh)));
 	var mmi=Math.floor(mmmm);
	var mmss=parseFloat(60*(parseFloat(mmmm)-parseFloat(mmi))+0.00001)
 	if (mmss>=60)
		{
		mmss=0;
		mmi=mmi+1;
		}
 	document.getElementById("starttah").value=hhh.toFixed(0);
 	document.getElementById("starttam").value=mmi.toFIxed(0);
	document.getElementById("starttas").value=mmss.toFixed(0);
};
