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
    orders: 分页排序VO[];
    // 设备名称
    deviceName: string;
    // 报警信息
    warnInfo: string;
    // 运行模式
    runMode: string;
    // 当前刀具
    currentKnife: string;
}
// JSONResult«List«深蓝折弯机报表»»
export interface IJSONResultList深蓝折弯机报表 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 深蓝折弯机报表[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
