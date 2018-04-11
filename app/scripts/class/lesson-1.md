#Observable的性质
* 包含三种状态：next、error、complete
* 永不结束： 不会结束的Observable，会一直等待(没有complete状态) 
* 特殊的静态操作符：
    * never：创建一个不向观察者发出任何项的 Observable 
    * empty：创建一个什么数据都不发出并且立马完成的 Observable(complete状态)
    * throw：创建一个不发送数据给观察者并且立马发出错误通知的 Observable(error状态)
# 常见创建类操作符
* from：可以把Array、Promise、Iterable转化为Observable
* fromEvent：可以把DOM事件转化为Observable
* of：接受一系列数据，并把它们emit出去
* interval：无限自增的发出指定间隔时间的Observable值
* timer：同理interval，但是可以指定什么时间发送

# 常见转换操作符
* map：将源 Observable 发出的每个值转换为新的Observable 发出
* mapTo：将源 Observable 发出的每个值，新的Observable输出流为给出的指定常量
* pluck：将每个源值(对象)映射成它指定的嵌套属性
* scan：对源 Observable 使用累加器函数， 返回生成的中间值，可选的初始值
* reduce：和scan操作符同理，然后当源 Observable 完成时返回结果(其区别是不返回生成的中间值)，可选的初始值

# 常见工具类操作符
* do：将源Observable发出的每个值时都执行其他操作，但返回的Observable不变

# 常见过滤类操作符
* filter：将源 Observable 发出的每个值，对其满足指定条件的进行过滤
* take：只发出源Observable发出的每个值到指定的count位置后，完成整个Observable
* first：只发出由源 Observable 所发出的值中第一个
* last：只发出由源 Observable 所发出的值中最后一个
* skip：只发出源Observable跳过指定的count位置后发出的每个值后，完成整个Observable
* debounce：和debounceTime一样，但是不是接收特定的时间量，可以是Observable，可以作动态的时间处理场景
* debounceTime：接收一个时间，当特定的时间过后发出源Observable
* distinct：只发出源 Observable 所发出的所有与之前的项都不相同的项(类似Set)
* distinctUntilChanged：只发出源 Observable 发出的所有与前一项不相同的项

# 合并类操作符
* merge：将多个Observable发出的值按照各自的时间流顺序合并一个Observable
* concat：按照顺序，前一个 observable 完成了再订阅下一个 observable 并发出值。
* startWith：发射一个起始的Observable之后，再发出由源 Observable 所发出的项
* combineLatest：组合多个Observable来创建新的Observable，并且只有任意一个Observable有新的流时都会组合一个新的Observable
* withLatestFrom：合并源Observable和指定的Observable为新的Observable，当源Observable和指定的Observable有新值，且源Observable发出时
* zip：组合多个Observable来创建新的Observable，但是必须要每个Observable都必须有新的流才会组合一个新的Observable
