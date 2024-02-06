// 物料编辑请求DTO
export interface IMaterialEditorRequestDTO {
    // 编辑数据
    data: any;
    // 流程任务id - 新增/重新编辑业务，要设置为null
    flowPathTaskId: number;
    // 扩展参数
    extensionParam: any;
    // 物料批次设置
    lotSetting: IMaterialBatchSetEditObject;
}
// 物料批次设置编辑对象
export interface IMaterialBatchSetEditObject {
    // 物料id
    materialId: number;
    // 启用序列号
    enableSerialNo: string;
    // 序列号方案id
    serialNoSchemeId: number;
    // 启用批次
    enableLot: string;
    // 批次方案id
    lotSchemeId: number;
    // 启用质量追溯
    enableQualityTraceability: string;
    // 启用外部码
    enableExternalCode: string;
    // 外部码字段名称
    externalCodeFieldName: string;
    // 外部码长度
    externalCodeLength: number;
}
// JSONResult«string»
export interface IJSONResultstring {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: string;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
