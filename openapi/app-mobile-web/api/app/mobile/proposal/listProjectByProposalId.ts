// JSONResult«List«KaizenProjectResponseDTO»»
export interface IJSONResultListKaizenProjectResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IKaizenProjectResponseDTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// KaizenProjectResponseDTO
export interface IKaizenProjectResponseDTO {
    // ID
    id: number;
    // 项目编号
    code: string;
    // 项目名称
    name: string;
    // 项目类型
    type: string;
    // 项目类型描述
    typeDesc: string;
    // 项目负责人
    projectLeaderId: number;
    // 项目负责人名称
    projectLeaderName: string;
    // 项目开始日期
    projectStartDate: string;
    // 项目截止日期
    projectEndDate: string;
    // 项目状态
    projectStatus: string;
    // 项目状态描述
    projectStatusDesc: string;
    // 关联合理化建议
    proposalId: number;
    // 项目简介
    projectIntroduction: string;
}