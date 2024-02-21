// 列表列样式配置编辑DTO
export interface IListColumnStyleConfigurationEditDTO {
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
}
// JSONResult«列表列样式配置编辑DTO»
export interface IJSONResultListColumnStyleConfigurationEditDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IListColumnStyleConfigurationEditDTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}