// 路由修改 DTO
export interface IModifyTheRouteDTO {
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
    // 类型
    type: string;
    // 图标
    icon: string;
    // 路由层级
    level: number;
    // 路由排序
    sort: number;
    // 是否存在数据权限
    hasDataAuth: string;
    // 配置
    config: IRouteConfigurationRequestsDTO;
    // 应用级别
    applicationLevel: string;
    // id
    id: number;
}
// 路由配置请求 DTO
export interface IRouteConfigurationRequestsDTO {
    // 菜单类型
    menuType: string;
    // 应用配置
    appConfig: IApplyTheRouteConfigurationRequestDTO;
}
// 应用路由配置请求 DTO
export interface IApplyTheRouteConfigurationRequestDTO {
    // 系统应用类型
    appSystemType: string;
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: Record<string, any>;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
