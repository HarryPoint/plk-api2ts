// JSONResult«List«不合格品处理方式响应对象»»
export interface IJSONResultList不合格品处理方式响应对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I不合格品处理方式响应对象[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 不合格品处理方式响应对象
export interface I不合格品处理方式响应对象 {
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
