// 设备数采数据详单搜索VO
export interface I设备数采数据详单搜索VO {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: 分页排序VO[];
    // 设备id
    deviceId: number;
    // 是否有异常
    hasError: string;
    // 开始时间 yyyy-MM-dd HH:mm:ss
    beginTime: string;
    // 结束时间 yyyy-MM-dd HH:mm:ss
    endTime: string;
}
// JSONResult«设备数采数据详单返回VO»
export interface IJSONResult设备数采数据详单返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 设备数采数据详单返回VO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
