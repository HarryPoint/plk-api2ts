// 产品订单企业查询请求对象
export interface IProductOrderEnterpriseQueryRequestObject {
    // 名称或者编号
    nameOrCode: string;
}
// JSONResult«List«企业名称编号响应对象»»
export interface IJSONResultListEnterpriseNameNumberResponseObject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IBusinessNameNumberResponseObject[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 企业名称编号响应对象
export interface IBusinessNameNumberResponseObject {
    // 企业id
    id: number;
    // 企业名称
    name: string;
    // 企业编号
    code: string;
}