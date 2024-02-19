// JSONResult«ProjectManageAppQueryResponseDTO»
export interface IJSONResultProjectManageAppQueryResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProjectManageAppQueryResponseDTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// ProjectManageAppQueryResponseDTO
export interface IProjectManageAppQueryResponseDTO {
    // 项目管理App id列表
    projectManageAppList: IIdNameNumberVO[];
    // 公共App id列表
    publicAppList: IIdNameNumberVO[];
}
// Id，名称，编号VO
export interface IIdNameNumberVO {
    // id
    id: number;
    // 名称
    name: string;
    // 编号
    code: string;
}
