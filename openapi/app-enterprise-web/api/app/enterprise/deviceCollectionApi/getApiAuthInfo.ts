// JSONResult«Saas企业Ak Sk响应 DTO»
export interface IJSONResultSaasEnterpriseAkSkRespondsToDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ISaasEnterpriseAkSkRespondsToDTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// Saas企业Ak Sk响应 DTO
export interface ISaasEnterpriseAkSkRespondsToDTO {
    // id
    id: number;
    // accessKey
    accessKey: string;
    // accessSecret
    accessSecret: string;
}
