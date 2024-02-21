// JSONResult«项目大屏设置保存请求dto»
export interface IJSONResultProjectLargeScreenSettingsSaveRequestDto {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProjectLargeScreenSettingsSaveRequestDto;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 项目大屏设置保存请求dto
export interface IProjectLargeScreenSettingsSaveRequestDto {
    // 统计范围
    scope: string;
    // 项目类型ids
    projectTypeIds: number[];
    // 排除的项目ids
    excludeProjectIds: number[];
}
