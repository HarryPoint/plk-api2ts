// JSONResult«List«工艺文档映射配置VO»»
export interface IJSONResultList工艺文档映射配置VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I工艺文档映射配置VO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 工艺文档映射配置VO
export interface I工艺文档映射配置VO {
    // 来源应用编码
    fromFlowPathCode: string;
    // 来源字段编码
    fromFieldCode: string;
    // 来源字段序列号
    fromFieldSerialNo: string;
    // 映射到应用编码
    toCode: string;
    // 映射到字段编码
    toFieldCode: string;
    // 映射到字段序列号
    toFieldSerialNo: string;
}
