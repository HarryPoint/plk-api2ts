// 物料编辑请求DTO
export interface I物料编辑请求DTO {
    // 编辑数据
    data;
    // 流程任务id - 新增/重新编辑业务，要设置为null
    flowPathTaskId: number;
    // 扩展参数
    extensionParam;
    // 物料批次设置
    lotSetting: 物料批次设置编辑对象;
}
// JSONResult«物料编辑响应信息»
export interface IJSONResult物料编辑响应信息 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 物料编辑响应信息;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
