function reverse(str: string | number[]): string | number[] {
  if (typeof str === 'string') {
    return str.split('').reverse().join('')
  } else {
    return str.slice().reverse()
  }

}

reverse('abcdefg')
reverse([1, 2, 3])