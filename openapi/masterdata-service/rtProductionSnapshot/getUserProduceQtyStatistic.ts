// 用户生产统计搜索VO
export interface I用户生产统计搜索VO {
    // 查询开始时间 yyyy-MM-dd HH:mm:ss
    beginTime: string;
    // 查询结束时间 yyyy-MM-dd HH:mm:ss
    endTime: string;
    // 物料id集合
    materialIds: number[];
    // 工序id集合
    processIds: number[];
    // 生产任务类型
    produceTaskTypeList: string[];
    // 生产订单编码
    produceOrderCode: string;
}
// JSONResult«用户生产合计统计返回VO»
export interface IJSONResult用户生产合计统计返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 用户生产合计统计返回VO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
