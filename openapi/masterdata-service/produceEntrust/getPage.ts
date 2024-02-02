// 委外加工搜索VO
export interface I委外加工搜索VO {
    // 委外单号
    entrustNo: string;
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 生产订单号
    produceOrderCode: string;
    // 排序字段集
    orders: 分页排序VO[];
    // 物料id
    materialId: number;
    // 发起时间开始 yyyy-MM-dd HH:mm:ss
    beginTime: string;
    // 发起时间结束 yyyy-MM-dd HH:mm:ss
    endTime: string;
}
// JSONResult«分页信息«委外加工返回VO»»
export interface IJSONResult分页信息委外加工返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 分页信息«委外加工返回VO»;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
