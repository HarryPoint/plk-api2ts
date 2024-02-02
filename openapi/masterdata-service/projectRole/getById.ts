// 流程结构搜索VO
export interface I流程结构搜索VO {
    // 流程任务id
    flowPathTaskId: number;
    // 数据id
    id: number;
}
// JSONResult«项目角色编辑响应DTO»
export interface IJSONResult项目角色编辑响应DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 项目角色编辑响应DTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
