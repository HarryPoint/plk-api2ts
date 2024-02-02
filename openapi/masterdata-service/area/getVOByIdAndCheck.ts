// JSONResult«区域VO»
export interface IJSONResult区域VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I区域VO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 区域VO
export interface I区域VO {
    // id
    id: number;
    // 所属企业id
    enterpriseId: number;
    // 区域名称
    name: string;
    // 区域编号
    code: string;
    // 父级id
    parentId: number;
}
