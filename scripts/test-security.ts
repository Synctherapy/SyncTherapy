import { sanitizeContent } from '../lib/security';

console.log('Running security tests...');

const tests = [
  {
    name: 'Script Removal',
    input: '<script>alert(1)</script><p>Safe</p>',
    expected: '<p>Safe</p>'
  },
  {
    name: 'Iframe Removal',
    input: '<iframe src="evil.com"></iframe><p>Safe</p>',
    expected: '<p>Safe</p>'
  },
  {
    name: 'Onclick Removal',
    input: '<a href="#" onclick="alert(1)">Click</a>',
    check: (out: string) => !out.includes('onclick') && out.includes('<a href="#"')
  },
  {
    name: 'Javascript URI Removal',
    input: '<a href="javascript:alert(1)">Click</a>',
    check: (out: string) => !out.includes('javascript:')
  },
  {
    name: 'Img Src Allowed',
    input: '<img src="valid.jpg" alt="test" />',
    check: (out: string) => out.includes('<img src="valid.jpg"') && out.includes('alt="test"')
  },
  {
    name: 'Heading Allowed',
    input: '<h1>Title</h1>',
    expected: '<h1>Title</h1>'
  }
];

let failed = 0;

for (const t of tests) {
  const output = sanitizeContent(t.input);
  let passed = false;
  if (t.expected) {
    passed = output.trim() === t.expected;
  } else if (t.check) {
    passed = t.check(output);
  }

  if (passed) {
    console.log(`✅ ${t.name} PASSED`);
  } else {
    console.log(`❌ ${t.name} FAILED`);
    console.log(`   Input: ${t.input}`);
    console.log(`   Output: ${output}`);
    console.log(`   Expected: ${t.expected || 'Check function'}`);
    failed++;
  }
}

if (failed > 0) {
  console.log(`\n${failed} tests failed!`);
  process.exit(1);
} else {
  console.log('\nAll security tests passed!');
}
