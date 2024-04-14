let s = document.querySelectorAll('input.s');
let n = document.querySelectorAll('input.n');
let r = document.querySelector('input.res');
let eq = document.querySelector(".eq");
let ans;
let l = 0;
let a;
let b;
let q;
let ans1;
let p;
let nn;
function zeroo(ans, nn) {
    if (ans.length == 1) {
        // if ("(") {
        //     return nn;
        // }
        return nn;

    }
    else {
        ans += nn;
        return ans;
    }
}
function point(ans) {
    if (r.getAttribute("value") == "") {
        return ans = '0' + '.';
    }
    else {
        if (ans.charAt(ans.length - 1) == p || ans.charAt(ans.length - 1) == "(") {
            return ans += '0' + '.';
        }
        else {
            return ans += '.';
        }
    }
};

n.forEach((i) => {
    i.addEventListener("click", () => {
        l++;
        console.log("clicked")
        nn = i.getAttribute("value");
        if (r.getAttribute("value") == "") {
            if (i.getAttribute("value") == ".") {
                ans = point(ans);
                r.setAttribute("value", ans);
            }
            else {
                ans = i.getAttribute("value");
                r.setAttribute("value", ans);

            }
        }
        else {
            if (i.getAttribute("value") == ".") {
                ans = point(ans);
                return r.setAttribute("value", ans);
            }
            if ((ans.charAt(ans.length - 1)) == "0" && i.getAttribute("value") != ".") {
                ans = zeroo(ans, nn);
                return r.setAttribute("value", ans);
            }
            else {
                ans += i.getAttribute("value");
                return r.setAttribute("value", ans);
            }
        }

    });
});

s.forEach((j) => {
    if (j.getAttribute("value") != "()") {
        j.addEventListener("click", () => {
            p = j.getAttribute("value");
            if (r.getAttribute("value") == "" && p != "C" && p != "()") {
                return r.setAttribute("placeholder", "INVALID");
            }
            // if ((r.getAttribute("value") == "") || ((r.getAttribute("value") == "") && (j.getAttribute("value") == "=")) && (j.getAttribute("value") != "C") && (j.getAttribute("value") != "()")) {
            //     return r.setAttribute("placeholder", "INVALID");
            // }
            if ((j.getAttribute("value") == "C") || ((r.getAttribute("value")) == "" && (j.getAttribute("value") == "C"))) {
                ans = "";
                r.setAttribute("placeholder", "");
                return r.setAttribute("value", "");
            }
            // if (j.getAttribute("value") == "=") {
            //     try {
            //         ans = eval(ans);
            //         r.setAttribute("value", ans);
            //         ans = ans.toString();
            //         return;
            //     }
            //     catch (err) {
            //         return r.setAttribute("value", "ERROR");
            //     }
            // }
            // if (j.getAttribute("value") == "()") {
            //     if (r.getAttribute("value") == "") {
            //         ans = "(";
            //         r.setAttribute("value", ans);
            //     }
            //     else {
            //         ans += "(";
            //         r.setAttribute("value", ans);
            //     }

            // }
            else {
                l++;
                ans += j.getAttribute("value");
                r.setAttribute("value", ans);
            }
        })
    }
    if (j.getAttribute("value") == "()") {
        let ppp = 0;
        j.addEventListener("click", () => {
            if (ppp == 0) {
                if (r.getAttribute("value") == "") {
                    ans = "(";
                    r.setAttribute("value", ans);
                }
                else {
                    ans += "(";
                    r.setAttribute("value", ans);
                }
                ppp = 1;
            }
            else {
                if (r.getAttribute("value") == "") {
                    return r.setAttribute("value", "INVALID");
                }
                else {
                    ans += ")";
                    r.setAttribute("value", ans);
                }
                ppp = 0;
            }
        })
    }

});

eq.addEventListener("click", () => {
    try {
        ans = eval(ans);
        r.setAttribute("value", ans);
        ans = ans.toString();
        return;
    }
    catch (err) {
        flag = 1;
        return r.setAttribute("value", "ERROR");
    }

});