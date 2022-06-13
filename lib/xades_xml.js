var Hugml = require("hugml")

var hugml = new Hugml({
	"http://uri.etsi.org/02918/v1.2.1#": "asic",
	"http://www.w3.org/2000/09/xmldsig#": "ds",
	"http://uri.etsi.org/01903/v1.3.2#": "xades"
}, '', '')

exports.parse = hugml.parse.bind(hugml)
exports.stringify = hugml.stringify.bind(hugml)
exports.canonicalize = hugml.canonicalize.bind(hugml)
