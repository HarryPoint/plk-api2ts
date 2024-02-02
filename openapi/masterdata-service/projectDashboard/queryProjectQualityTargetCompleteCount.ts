// 项目看板查询dto
export interface I项目看板查询dto {
    // 开始日期
    beginTime: string;
    // 结束日期
    endTime: string;
    // 项目大类
    projectCategory: string;
    // undefined
    projectTypeIds: number[];
    // undefined
    excludeProjectIds: number[];
}
// JSONResult«项目质量目标统计响应对象»
export interface IJSONResult项目质量目标统计响应对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 项目质量目标统计响应对象;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
