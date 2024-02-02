// 任务批量操作DTO_4
export interface I任务批量操作DTO_4 {
    // 工序id
    processId: number;
    // 生产任务列表
    produceTaskList: 任务批量操作DTO_3[];
    // 是否使用进出料信息，来作为实际出料的唯一依据
    isUseMaterialMoveInOrOutInfo: string;
    // undefined
    handleOtherAsync: string;
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
