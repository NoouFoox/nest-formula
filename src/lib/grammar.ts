/* eslint-disable */
// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
import math from './math'
const useTime =(value)=> value
function id(x) { return x[0]; }
    export default{
    Lexer: undefined,
    ParserRules: [
    {"name": "main", "symbols": ["_", "AS", "_"], "postprocess": function(d) {return d[1]; }},
    {"name": "P", "symbols": [{"literal":"("}, "_", "AS", "_", {"literal":")"}], "postprocess": function(d) {return d[2]; }},
    {"name": "P", "symbols": ["N"], "postprocess": id},
    {"name": "P$subexpression$1$string$1", "symbols": [{"literal":"C"}, {"literal":"A"}, {"literal":"S"}, {"literal":"E"}, {"literal":"("}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "P$subexpression$1", "symbols": ["P$subexpression$1$string$1"]},
    {"name": "P$subexpression$1$string$2", "symbols": [{"literal":"c"}, {"literal":"a"}, {"literal":"s"}, {"literal":"e"}, {"literal":"("}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "P$subexpression$1", "symbols": ["P$subexpression$1$string$2"]},
    {"name": "P$subexpression$2", "symbols": ["COMP"]},
    {"name": "P$subexpression$2", "symbols": ["BOOL"]},
    {"name": "P$ebnf$1", "symbols": []},
    {"name": "P$ebnf$1$subexpression$1$subexpression$1", "symbols": ["COMP"]},
    {"name": "P$ebnf$1$subexpression$1$subexpression$1", "symbols": ["BOOL"]},
    {"name": "P$ebnf$1$subexpression$1", "symbols": [{"literal":";"}, "_", "P$ebnf$1$subexpression$1$subexpression$1", "_", {"literal":","}, "_", "AS"]},
    {"name": "P$ebnf$1", "symbols": ["P$ebnf$1", "P$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "P", "symbols": ["P$subexpression$1", "_", "P$subexpression$2", "_", {"literal":","}, "_", "AS", "_", "P$ebnf$1", "_", {"literal":")"}], "postprocess":  function(d) {
        		let l = d[8].length;
        		if (d[2][0]) {
        			return d[6];
        		}
        		let i;
        		// 为每一个分号后面的数据做匹配
        		for (i = 0; i < l; i++) {
        			if (d[8][i][2][0]) {
        				return d[8][i][6];
        			}
        		}
        		return NaN;
        } },
    {"name": "MD", "symbols": ["MD", "_", {"literal":"*"}, "_", "P"], "postprocess": function(d) {return math.multiply(d[0],d[4]); }},
    {"name": "MD", "symbols": ["MD", "_", {"literal":"/"}, "_", "P"], "postprocess": function(d) {return math.divide(d[0],d[4]); }},
    {"name": "MD", "symbols": ["P"], "postprocess": id},
    {"name": "AS", "symbols": ["AS", "_", {"literal":"+"}, "_", "MD"], "postprocess": function(d) {return math.add(d[0],d[4]) }},
    {"name": "AS", "symbols": ["AS", "_", {"literal":"-"}, "_", "MD"], "postprocess": function(d) {return math.subtract(d[0],d[4]); }},
    {"name": "AS", "symbols": ["MD"], "postprocess": id},
    {"name": "COMP", "symbols": ["AS", "_", {"literal":">"}, "_", "AS"], "postprocess": function(d) {return useTime(d[0]) > useTime(d[4]);}},
    {"name": "COMP$string$1", "symbols": [{"literal":">"}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "COMP", "symbols": ["AS", "_", "COMP$string$1", "_", "AS"], "postprocess": function(d) {return useTime(d[0]) >= useTime(d[4]);}},
    {"name": "COMP", "symbols": ["AS", "_", {"literal":"<"}, "_", "AS"], "postprocess": function(d) {return useTime(d[0]) < useTime(d[4]);}},
    {"name": "COMP$string$2", "symbols": [{"literal":"<"}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "COMP", "symbols": ["AS", "_", "COMP$string$2", "_", "AS"], "postprocess": function(d) {return useTime(d[0]) <= useTime(d[4]);}},
    {"name": "COMP$string$3", "symbols": [{"literal":"="}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "COMP", "symbols": ["AS", "_", "COMP$string$3", "_", "AS"], "postprocess": function(d) {return useTime(d[0]) == useTime(d[4]);}},
    {"name": "COMP$string$4", "symbols": [{"literal":"!"}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "COMP", "symbols": ["AS", "_", "COMP$string$4", "_", "AS"], "postprocess": function(d) {return useTime(d[0]) != useTime(d[4]);}},
    {"name": "BOOL$string$1", "symbols": [{"literal":"|"}, {"literal":"|"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BOOL", "symbols": ["COMP", "_", "BOOL$string$1", "_", "COMP"], "postprocess": (d)=>d[0]||d[4]},
    {"name": "BOOL$string$2", "symbols": [{"literal":"&"}, {"literal":"&"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BOOL", "symbols": ["COMP", "_", "BOOL$string$2", "_", "COMP"], "postprocess": (d)=>d[0]&&d[4]},
    {"name": "N", "symbols": ["float"], "postprocess": id},
    {"name": "N$subexpression$1$string$1", "symbols": [{"literal":"c"}, {"literal":"e"}, {"literal":"i"}, {"literal":"l"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "N$subexpression$1", "symbols": ["N$subexpression$1$string$1"]},
    {"name": "N$subexpression$1$string$2", "symbols": [{"literal":"C"}, {"literal":"E"}, {"literal":"I"}, {"literal":"L"}, {"literal":"I"}, {"literal":"N"}, {"literal":"G"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "N$subexpression$1", "symbols": ["N$subexpression$1$string$2"]},
    {"name": "N", "symbols": ["N$subexpression$1", "_", "P"], "postprocess": function(d) {return Math.ceil(d[2]); }},
    {"name": "N$subexpression$2$string$1", "symbols": [{"literal":"f"}, {"literal":"l"}, {"literal":"o"}, {"literal":"o"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "N$subexpression$2", "symbols": ["N$subexpression$2$string$1"]},
    {"name": "N$subexpression$2$string$2", "symbols": [{"literal":"F"}, {"literal":"L"}, {"literal":"O"}, {"literal":"O"}, {"literal":"R"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "N$subexpression$2", "symbols": ["N$subexpression$2$string$2"]},
    {"name": "N", "symbols": ["N$subexpression$2", "_", "P"], "postprocess": function(d) {return Math.floor(d[2]); }},
    {"name": "N$subexpression$3$string$1", "symbols": [{"literal":"r"}, {"literal":"o"}, {"literal":"u"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "N$subexpression$3", "symbols": ["N$subexpression$3$string$1"]},
    {"name": "N$subexpression$3$string$2", "symbols": [{"literal":"R"}, {"literal":"O"}, {"literal":"U"}, {"literal":"N"}, {"literal":"D"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "N$subexpression$3", "symbols": ["N$subexpression$3$string$2"]},
    {"name": "N", "symbols": ["N$subexpression$3", "_", "P"], "postprocess": function(d) {return Math.round(d[2]); }},
    {"name": "N$string$1", "symbols": [{"literal":"$"}, {"literal":"{"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "N$ebnf$1", "symbols": []},
    {"name": "N$ebnf$1$subexpression$1", "symbols": [{"literal":"."}, "VAR"]},
    {"name": "N$ebnf$1", "symbols": ["N$ebnf$1", "N$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "N", "symbols": ["N$string$1", "VAR", "N$ebnf$1", {"literal":"}"}], "postprocess":  function(d) {
        		let l = d[2].length;
        		let v = "${" + d[1];
        
        		for (let i = 0; i < l; i++) {
        			v += "." + d[2][i][1];
        		}
        		return v + "}";
        } },
    {"name": "N$subexpression$4", "symbols": [{"literal":"\""}]},
    {"name": "N$subexpression$5", "symbols": [{"literal":"\""}]},
    {"name": "N", "symbols": ["N$subexpression$4", "STR", "N$subexpression$5"], "postprocess": function(d) {return d[1]; }},
    {"name": "N$subexpression$6", "symbols": [{"literal":"'"}]},
    {"name": "N$subexpression$7", "symbols": [{"literal":"'"}]},
    {"name": "N", "symbols": ["N$subexpression$6", "STR", "N$subexpression$7"], "postprocess": function(d) {return d[1]; }},
    {"name": "STR$ebnf$1", "symbols": []},
    {"name": "STR$ebnf$1", "symbols": ["STR$ebnf$1", /[\u0e00-\u0e7f\u0020\u4e00-\u9fa5a-zA-Z\d_\-\s\.\:\@]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "STR", "symbols": ["STR$ebnf$1"], "postprocess": function(d) {return d[0].join(""); }},
    {"name": "VAR$ebnf$1", "symbols": [/[\u0e00-\u0e7f\u0020\u4e00-\u9fa5a-zA-Z\d_\-]/]},
    {"name": "VAR$ebnf$1", "symbols": ["VAR$ebnf$1", /[\u0e00-\u0e7f\u0020\u4e00-\u9fa5a-zA-Z\d_\-]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "VAR", "symbols": ["VAR$ebnf$1"], "postprocess": function(d) {return d[0].join(""); }},
    {"name": "float", "symbols": ["int", {"literal":"."}, "unsigned_int"], "postprocess": function(d) {return parseFloat(d[0] + d[1] + d[2])}},
    {"name": "float", "symbols": ["int"], "postprocess": function(d) {return parseInt(d[0])}},
    {"name": "unsigned_int$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "unsigned_int$ebnf$1", "symbols": ["unsigned_int$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "unsigned_int", "symbols": ["unsigned_int$ebnf$1"], "postprocess": function(d) {return d[0].join(""); }},
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", /[\s]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": function(d) {return null; }},
    {"name": "int$ebnf$1$subexpression$1", "symbols": [{"literal":"-"}]},
    {"name": "int$ebnf$1$subexpression$1", "symbols": [{"literal":"+"}]},
    {"name": "int$ebnf$1", "symbols": ["int$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "int$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "int$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "int$ebnf$2", "symbols": ["int$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "int", "symbols": ["int$ebnf$1", "int$ebnf$2"], "postprocess": 
        function(d) {
            if (d[0]) {
                return (d[0][0]+d[1].join(""));
            } else {
                return (d[1].join(""));
            }
        }
        }
]
  , ParserStart: "main"
}

