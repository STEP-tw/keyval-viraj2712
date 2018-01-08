const src=function(filePath){return "../src/"+filePath};

const assert=require('chai').assert;
const Parsed=require(src('parsed.js'));
const StrictParser=require(src('index.js')).StrictParser;

describe("strict parser that is case insensitive",function(){
  it("should parse when specified keys are in lower case and actual is not",function(){
    let kvParser=new StrictParser(["name"],false);
    let expected=new Parsed();
    expected["NAME"]="jayanth";
    let parsed=kvParser.parse("NAME=jayanth");
    assert.deepEqual(parsed,expected);
  });
  it("should parse when specified keys are in upper case and actual is not",function(){
    let kvParser=new StrictParser(["NAME"],false);
    let expected=new Parsed();
    expected["name"]="jayanth";
    let parsed=kvParser.parse("name=jayanth");
    assert.deepEqual(parsed,expected);
  });
  it("should parse when specified keys are in upper and lower case and actual is not",function(){
    let kvParser=new StrictParser(["NAME","name"],false);
    let expected=new Parsed();
    expected["nAmE"]="jayanth";
    let parsed=kvParser.parse("nAmE=jayanth");
    assert.deepEqual(parsed,expected);
  });
  it("should parse when specified keys are in upper case with underScore and actual is different",function(){
    let kvParser=new StrictParser(["_NAME"],false);
    let expected=new Parsed();
    expected["_nAmE"]="jayanth";
    let parsed=kvParser.parse("_nAmE=jayanth");
    assert.deepEqual(parsed,expected);
  });
  it("should parse when specified keys are in lower case with underScore and actual is different",function(){
    let kvParser=new StrictParser(["_name"],false);
    let expected=new Parsed();
    expected["_NaMe"]="jayanth";
    let parsed=kvParser.parse("_NaMe=jayanth");
    assert.deepEqual(parsed,expected);
  });
  it("should parse when specified keys are in upper and lower case with underScore and actual is different",function(){
    let kvParser=new StrictParser(["_nAmE"],false);
    let expected=new Parsed();
    expected["_nAmE"]="jayanth";
    let parsed=kvParser.parse("_nAmE=jayanth");
    assert.deepEqual(parsed,expected);
  });
  it("should parse when specified keys are in lower case with numbers and actual is different",function(){
    let kvParser=new StrictParser(["name123"],false);
    let expected=new Parsed();
    expected["nAmE123"]="jayanth";
    let parsed=kvParser.parse("nAmE123=jayanth");
    assert.deepEqual(parsed,expected);
  });
  it("should parse when specified keys are in upper case with numbers and actual is different",function(){
    let kvParser=new StrictParser(["NAME123"],false);
    let expected=new Parsed();
    expected["NaMe123"]="jayanth";
    let parsed=kvParser.parse("NaMe123=jayanth");
    assert.deepEqual(parsed,expected);
  });
  it("should parse when specified keys are in upper and lower case with numbers and actual is different",function(){
    let kvParser=new StrictParser(["NaMe123"],false);
    let expected=new Parsed();
    expected["name123"]="jayanth";
    let parsed=kvParser.parse("name123=jayanth");
    assert.deepEqual(parsed,expected);
  });
  it("should parse when specified keys are in upper case with numbers,underscore and actual is different",function(){
    let kvParser=new StrictParser(["NAME_123"],false);
    let expected=new Parsed();
    expected["naMe_123"]="jayanth";
    let parsed=kvParser.parse("naMe_123=jayanth");
    assert.deepEqual(parsed,expected);
  });
  it("should parse when specified keys are in lower case with numbers,underscore and actual is different",function(){
    let kvParser=new StrictParser(["name_123","age_123"],false);
    let expected=new Parsed();
    expected["naMe_123"]="jayanth";
    expected["AGe_123"]="31";
    let parsed=kvParser.parse("naMe_123=jayanth AGe_123=31");
    assert.deepEqual(parsed,expected);
  });
  it("should parse when specified keys are in upper and lower case with numbers,underscore and actual is different",function(){
    let kvParser=new StrictParser(["NaMe_123","age_123"],false);
    let expected=new Parsed();
    expected["naMe_123"]="jayanth";
    expected["AGe_123"]="31";
    let parsed=kvParser.parse("naMe_123=jayanth AGe_123=31");
    assert.deepEqual(parsed,expected);
  });
});


describe("strict parser that is case sensitive",function(){
  it("should throw error when specified keys are in lower case and actual is not",function(){
    let kvParser=new StrictParser(["name"],true);
    assert.throws(()=>{
      kvParser.parse("NAME=jayanth");
    })
  });
});
