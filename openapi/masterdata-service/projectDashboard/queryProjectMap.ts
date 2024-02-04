// 项目看板查询dto
export interface IProjectKanbanQueryDto {
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
// JSONResult«List«项目地图响应对象»»
export interface IJSONResultList项目地图响应对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I项目地图响应对象[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 项目地图响应对象
export interface I项目地图响应对象 {
    // 省份编码
    provinceCode: string;
    // 省份名称
    provinceName: string;
    // 项目数量
    projectQuantity: number;
    // 项目列表
    projectList: IIdCodeNameGenericTransportObject[];
}
// Id Code Name 通用传输对象
export interface IIdCodeNameGenericTransportObject {
    // id
    id: number;
    // code
    code: string;
    // name
    name: string;
}
