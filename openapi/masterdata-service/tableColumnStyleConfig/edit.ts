// 列表列样式配置编辑DTO
export interface I列表列样式配置编辑DTO {
    // id
    id: number;
    // 名称
    name: string;
    // 编码
    code: string;
    // 类型
    type: string;
    // 列配置JSON
    config;
}
// JSONResult«列表列样式配置编辑DTO»
export interface IJSONResult列表列样式配置编辑DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I列表列样式配置编辑DTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
