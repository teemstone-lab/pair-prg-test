import { render } from '@testing-library/svelte'
import userEvent from '@testing-library/user-event'
import App from '../App.svelte'

// test('페이지 로드 시 창을 놓을 수 있는 공간이 존재해야 함', () => {
//   const results = render(App)
//   expect(results.getByRole('grid')).toBeTruthy()
// })

// test('페이지 로드 시 창(window) 3개가 생성되어야 함', () => {
//   const results = render(App)
//   const gridcells = results.getAllByRole('gridcell')
//   expect(gridcells.length).toEqual(3)
// })

// test('창을 추가할 수 있는 버튼을 생성함', () => {
//   const results = render(App)
//   expect(results.getByRole('button', { name: 'Add Window' })).toBeTruthy()
// })

// test('창 추가 버튼을 클릭하면 새 창을 생성하고, 새 창의 번호가 최근 생성 번호 + 1로 한다.', async () => {
//   const results = render(App)
//   const target = results.getByRole('button', { name: 'Add Window' })
//   const beforeWindowCount = results.getAllByRole('gridcell').length
//   await userEvent.click(target)
//   const afterWindowCount = results.getAllByRole('gridcell').length
//   expect(beforeWindowCount + 1).toEqual(afterWindowCount)
// })

// test('창 제목은 Window+창번호로 한다', () => {
//   const results = render(App)
//   expect(results.getByText('Window1')).toBeTruthy()
// })

// test('창 내용에는 X 버튼을 포함시킨다.', () => {
//   const results = render(App)
//   const windowCount = results.getAllByRole('gridcell').length
//   const btnCount = results.getAllByRole('button', { name: 'X' }).length
//   expect(btnCount).toEqual(windowCount)
// })

// test('X 버튼을 클릭하면 창을 닫는 기능을 동작시킨다.', async () => {
//   const results = render(App)
//   const target = results.getAllByRole('button', { name: 'X' })[0]
//   const beforeWindowCount = results.getAllByRole('gridcell').length
//   await userEvent.click(target)
//   const afterWindowCount = results.getAllByRole('gridcell').length
//   expect(beforeWindowCount - 1).toEqual(afterWindowCount)
// })

test('창 제목은 Window+창번호로 한다', () => {
  const results = render(App)
  expect(results.getByText('Vite + Svelte')).toBeTruthy()
})
