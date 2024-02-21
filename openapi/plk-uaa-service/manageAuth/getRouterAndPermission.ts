// 路由查询
export interface IRouteQuery {
    // 客户端组编码
    clientGroupCode: string;
}
// JSONResult«运营路由权限响应 DTO»
export interface IJSONResultOperationRoutePermissionResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IOperationRoutePermissionRespondsToTheDTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 运营路由权限响应 DTO
export interface IOperationRoutePermissionRespondsToTheDTO {
    // 路由集
    routerList: ITheRouteRespondsToTheDTO[];
    // 权限码集
    permissionCodeList: string[];
}
// 路由响应 DTO
export interface ITheRouteRespondsToTheDTO {
    // id
    id: number;
    // 客户端组编码
    clientGroupCode: string;
    // 所属权限编码
    permissionCode: string;
    // 父级路由id
    parentId: number;
    // 父级路由编码
    parentCode: string;
    // 路由name
    name: string;
    // 路由code
    code: string;
    // 菜单类型
    type: string;
    // 图标
    icon: string;
    // 路由排序
    level: number;
    // 路由排序
    sort: number;
    // 是否存在数据权限
    hasDataAuth: string;
    // 路由配置
    config: ITheRouteConfigurationRespondsToTheDTO;
    // 应用级别
    applicationLevel: string;
    // 子集
    children: ITheRouteRespondsToTheDTO[];
}
// 路由配置响应 DTO
export interface ITheRouteConfigurationRespondsToTheDTO {
    // 菜单类型
    menuType: string;
    // 应用配置
    appConfig: IApplicationRouteConfigurationRespondsToTheDTO;
}
// 应用路由配置响应 DTO
export interface IApplicationRouteConfigurationRespondsToTheDTO {
    // 系统应用类型
    appSystemType: string;
}
