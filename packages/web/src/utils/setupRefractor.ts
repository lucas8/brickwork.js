import refractor from 'refractor/core'

import jsx from 'refractor/lang/jsx'
import javascript from 'refractor/lang/javascript'
import css from 'refractor/lang/css'
import cssExtras from 'refractor/lang/css-extras'
import jsExtras from 'refractor/lang/js-extras'
import sql from 'refractor/lang/sql'
import typescript from 'refractor/lang/typescript'
import swift from 'refractor/lang/swift'
import objectivec from 'refractor/lang/objectivec'
import markdown from 'refractor/lang/markdown'
import json from 'refractor/lang/json'

refractor.register(jsx)
refractor.register(json)
refractor.register(typescript)
refractor.register(javascript)
refractor.register(css)
refractor.register(cssExtras)
refractor.register(jsExtras)
refractor.register(sql)
refractor.register(swift)
refractor.register(objectivec)
refractor.register(markdown)
