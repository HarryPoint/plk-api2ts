// JSONResult«List«列表列样式配置VO»»
export interface IJSONResultListListColumnStyleConfigurationVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IListColumnStyleConfigurationVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 列表列样式配置VO
export interface IListColumnStyleConfigurationVO {
    // id
    id: number;
    // 名称
    name: string;
    // 编码
    code: string;
    // 类型
    type: string;
    // 列配置JSON
    config: any;
    // 排序
    sort: number;
    // 是否是当前用户选中的
    isCurrentUserChoose: string;
}
