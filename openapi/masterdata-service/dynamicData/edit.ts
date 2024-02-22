// http://47.108.139.107:16700/doc.html#/default/动态数据相关/editUsingPOST_5
// 主数据基础编辑 DTO
export interface IMasterDataBaseEditDTO {
    // 编辑数据
    data: Record<string, Record<string, any>>;
    // 流程任务id - 新增/重新编辑业务，要设置为null
    flowPathTaskId: number;
    // 扩展参数
    extensionParam: Record<string, Record<string, any>>;
}
// JSONResult«DynamicFormSaveResultBO»
export interface IJSONResultDynamicFormSaveResultBO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IDynamicFormSaveResultBO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// DynamicFormSaveResultBO
export interface IDynamicFormSaveResultBO {
    // undefined
    id: number;
    // undefined
    code: string;
}
