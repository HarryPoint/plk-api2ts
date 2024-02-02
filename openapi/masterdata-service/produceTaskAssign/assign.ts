// 生产任务分配VO
export interface I生产任务分配VO {
    // 生产任务ids -- 单个分配时, 传递一个即可
    produceTaskIds: number[];
    // 分配人员ids -- 单个分配时, 传递一个即可
    assignUserIds: number[];
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
