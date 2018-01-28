// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
    const expressAppUrl = "http://192.168.1.29:3000",
    spawn = require("child_process").spawn,
    // For electron-packager change cwd in spawn to app.getAppPath() and
    // uncomment the app require below
    //app = require('electron').remote.app,
    node = spawn(".\\node.exe", ["./wx-express-test/bin/www"], {
    cwd: process.cwd()
    }),
    //   request = require("request"),
    //   _ = require("lodash"),
    //   key = require("keymaster"),
    //   $serverLog = $("#serverLog"),
    //   $expressApp = $("#expressApp"),
    //   $loading = $("#loading");
    /* key("f1", () => {
      if ($serverLog.css("display") === "none") {
        $serverLog.css("display", "block");
        $expressApp.addClass("expressAppHide");
      } else {
        $expressApp.removeClass("expressAppHide");
        $serverLog.css("display", "none");
      }
    });
    function strip(s) {
      // regex from: http://stackoverflow.com/a/29497680/170217
      return s.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, '');
    }
    function redirectOutput(x) {
      let lineBuffer = "";
      x.on('data', function (data) {
        lineBuffer += data.toString();
        let lines = lineBuffer.split("\n");
        _.forEach(lines, (l) => {
          if (l !== "") {
            $serverLog.append(strip(l) + "<br/>");
          }
        });
        lineBuffer = lines[lines.length - 1];
      });
    }
    redirectOutput(node.stdout);
    redirectOutput(node.stderr); */
    let checkServerRunning = setInterval(() => {
      request(expressAppUrl, (error, response, body) => {
        if (!error && response.statusCode == 200) {
          $expressApp.attr("src", expressAppUrl);
        //   $loading.css("display", "none");
        //   $expressApp.css("display", "block");
          clearInterval(checkServerRunning);
        }
      });
    }, 1000);