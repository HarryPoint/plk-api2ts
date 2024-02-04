// 深蓝报表查询条件
export interface I深蓝报表查询条件 {
    // 日期
    date: string;
    // 当前页面
    pageNo: number;
    // 当前执行的程序名称
    currentProgramName: string;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: I分页排序VO[];
    // 设备名称
    deviceName: string;
    // 报警信息
    warnInfo: string;
    // 运行模式
    runMode: string;
    // 当前刀具
    currentKnife: string;
}
// 分页排序VO
export interface I分页排序VO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«List«转塔或者1到7号机报表»»
export interface IJSONResultList转塔或者1到7号机报表 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I转塔或者1到7号机报表[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 转塔或者1到7号机报表
export interface I转塔或者1到7号机报表 {
    // 日期
    date: string;
    // 设备名称
    deviceName: string;
    // 加工数量
    produceQty: number;
    // 操作模式
    operateMode: string;
    // 运行模式
    runMode: string;
    // 当前刀具
    currentKnife: string;
    // 进给倍率
    feedMultiply: string;
    // 进给速度
    feedSpeed: string;
    // 报警信息
    warnInfo: string;
}
