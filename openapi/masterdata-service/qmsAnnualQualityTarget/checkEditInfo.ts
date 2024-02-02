// 年度质量目标编辑校验DTO
export interface I年度质量目标编辑校验DTO {
    // id
    id: number;
    // 编号
    code: string;
    // 年份
    year: string;
    // 明细数据
    details: 年度质量目标明细编辑DTO[];
}
// JSONResult«年度质量目标编辑校验返回DTO»
export interface IJSONResult年度质量目标编辑校验返回DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 年度质量目标编辑校验返回DTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
