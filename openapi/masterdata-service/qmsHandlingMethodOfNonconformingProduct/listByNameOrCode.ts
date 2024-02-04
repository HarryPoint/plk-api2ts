// 名称、编号DTO
export interface INameNumberDTO {
    // 名称or编号
    nameOrCode: string;
}
// JSONResult«List«不合格品处理方式响应对象»»
export interface IJSONResultListResponseObjectForHandlingNonconformingItems {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ITheNonconformingProductHandlingModeRespondsToTheObject[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 不合格品处理方式响应对象
export interface ITheNonconformingProductHandlingModeRespondsToTheObject {
    // id
    id: number;
    // 编号
    code: string;
    // 处理方式
    handingMethod: string;
    // 适用检验类型
    useValidationTypes: string;
    // 适用检验类型描述
    useValidationTypesDesc: string;
}
