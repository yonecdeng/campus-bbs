/* eslint-disable no-restricted-syntax */
// class Scheduler {
// 	list: any[] = []

// 	maxNum = 0

// 	workingNum = 0

// 	constructor(maxNum: number, list?: any[]) {
// 		this.maxNum = maxNum
// 		if (list) this.list = list
// 	}

// 	public add(promiseConstructorFn: PromiseConstructor) {
// 		this.list.push(promiseConstructorFn)
// 	}

// 	public start() {
// 		for (let i = 0; i < this.maxNum; i++) {
// 			this.doNext()
// 		}
// 	}

// 	private doNext() {
// 		if (this.list.length === 0 || this.workingNum >= this.maxNum) return
// 		this.workingNum++
// 		const cur = this.list.shift()
// 		console.log(cur)
// 		cur().then(() => {
// 			this.workingNum--
// 			this.doNext()
// 		})
// 	}
// }

// export default Scheduler

/* 并发调度--并发数量限制 --async-pool这个库的实现方法 */
async function asyncPool<T>(poolLimit: number, array: T[], promiseFn: (item: T, arr?: T[]) => Promise<unknown>) {
	const ret: Promise<unknown>[] = [] // 存储所有的异步任务
	const executing: Promise<unknown>[] = [] // 存储正在执行的异步任务
	for (const item of array) {
		// 调用promiseFn函数为array里的每一项创建异步任务并执行，且promiseFn函数返回的是个promise对象!
		const p: Promise<unknown> = Promise.resolve().then(() => promiseFn(item, array)) // 前面Promise.resolve().then()是为了创建异步
		ret.push(p) // 保存新的异步任务,,p必须是个promise对象，因为下面要进行.then()操作

		// 当poolLimit值小于或等于总任务个数时，进行并发控制
		if (poolLimit <= array.length) {
			// 当任务完成后，从正在执行的任务数组中移除已完成的任务
			const e: Promise<unknown> = p.then(() => executing.splice(executing.indexOf(e), 1)) // 这个是异步的
			executing.push(e) // 保存正在执行的异步任务
			if (executing.length >= poolLimit) {
				// eslint-disable-next-line no-await-in-loop
				await Promise.race(executing) // 等待较快的任务执行完成
			}
		}
	}
	return Promise.all(ret) // 最后执行到这肯定只剩小于或等于poolLimit个数的promise请求
}
export default asyncPool
